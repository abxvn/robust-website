import React from 'react'
import stringReplace from 'react-string-replace'

const ShellOutput = React.memo(({ lines }) => (
  <pre className='language-shell__output'>
    {lines.split(/\n/g).filter(Boolean).map((line, idx) => <div key={idx} className='token-line'><span className='token plain'>{applyColor(line)}</span></div>)}
  </pre>
), () => true)

export const LOG_LEVEL_TOKEN = /^(info|success|error|warn) /
export const TIME_TOKEN = /\+\d+ms$/
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
  const timeInjectedStr = levelInjectedStr.replace(TIME_TOKEN, (time) => `{${filters.debug} ${time}} `)
  const actionInjectedStr = timeInjectedStr.replace(ACTION_TOKEN, (_, indents, line, action) => `${indents}{${action} ${line}}`)
  const robustInjectedStr = actionInjectedStr.replace(ROBUST_TOKEN, (_, indents, action, params) => `${indents}{light robust ${action} ${params || ''}}`)

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
