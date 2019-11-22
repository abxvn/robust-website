import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import classnames from 'classnames'

export default function Feature ({ imageUrl, title, description, styles }) {
  const imgUrl = useBaseUrl(imageUrl)

  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className={styles.featureTitle}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
