/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import IndexFeature from '../common/IndexFeature'
import TypedCommands from '../common/TypedCommands'

const useDocUrl = path => useBaseUrl(`docs/${path}`)

const features = [
  {
    title: <>Availability</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Designed to work with other major frameworks via continuously growing plugin systems.
        Solutions are your choices, we will make them work.
      </>
    )
  },
  {
    title: <>Scalabilty</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Built up with multiple modules, for modular systems.
        We aimed to support asynchronous flows and micro-services based systems from the core.
      </>
    )
  },
  {
    title: <>Security</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Baked with auto-generated templates created by Robust team and community.
        Security focus tools that let you develop without much concerns.
      </>
    )
  }
]

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <header className={classnames('neo hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className={classnames('hero__title', styles.heroTitle)}>{siteConfig.tagline}</h1>
          <p className='hero__subtitle'>{siteConfig.customFields.description.map((line, idx) => <React.Fragment key={idx}><span>{line}</span><br /></React.Fragment>)}</p>
          <div className={classnames('hero__subtitle', styles.heroCommands)}>
            <TypedCommands strings={siteConfig.customFields.descriptionCommands} />
          </div>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--action button--lg',
                styles.getStarted
              )}
              to={useDocUrl('guide-started')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <IndexFeature key={idx} styles={styles} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js')

  whyDidYouRender(React)
}
