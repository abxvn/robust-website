import React from 'react'
import stringReplace from 'react-string-replace'
import classnames from 'classnames'

const ShellOutput = React.memo(({ lines, className }) => (
  <pre className={classnames('language-shell__output', className)}>
    {lines.split(/\n/g).filter(Boolean).map((line, idx) => <div key={idx} className='token-line'><span className='token plain'>{applyColor(line)}</span></div>)}
  </pre>
), () => true)

export const LOG_LEVEL_TOKEN = /^(info|success|error|warn) /
export const DEBUG_TOKEN = /\s{2,}app \S+|\+\d+ms/g
export const NAME_TOKEN = /(module|app) ((?:(?!with|for)[\w-])+)([\s\r\n]+|$)/ig
export const ACTION_TOKEN = /^(\s+)((added|inject): .+)/
export const ROBUST_TOKEN = /^(\s*)robust (\w+(?::\w+)*) ((<\w+> )+)?/
export const TOKEN_REGEX = /{([^}]+)}/gi
export const TOKEN_PART_REGEX = /([^ ]+) (.+)/
export const applyColor = str => {
  const filters = {
    info: 'deepskyblue',
    success: 'limegreen',
    error: 'red',
    warn: 'darkorange',
    name: 'lightgoldenrodyellow',
    light: 'white',
    debug: 'dodgerblue',
    inject: 'mediumpurple',
    added: 'limegreen'
  }
  const levelInjectedStr = str.replace(LOG_LEVEL_TOKEN, (_, level) => `{${level} ${level}} `)
  const debugInjectedStr = levelInjectedStr.replace(DEBUG_TOKEN, (token) => `{${filters.debug} ${token}} `)
  const actionInjectedStr = debugInjectedStr.replace(ACTION_TOKEN, (_, indents, line, action) => `${indents}{${action} ${line}}`)
  const nameInjectedStr = actionInjectedStr.replace(NAME_TOKEN, (_, prefix, name, after) => {
    return `${prefix} {name ${name}}${after}`
  })
  const robustInjectedStr = nameInjectedStr.replace(ROBUST_TOKEN, (_, indents, action, params) => `${indents}{light robust ${action} ${params || ''}}`)

  return stringReplace(robustInjectedStr, TOKEN_REGEX, (token) => {
    const matches = TOKEN_PART_REGEX.exec(token)

    if (!matches) {
      return token
    }

    const [, filterName, text] = matches
    const color = filters[filterName] ? filters[filterName] : filterName

    return <span key={text} style={{ color }}>{text}</span>
  })
}

export default ShellOutput
