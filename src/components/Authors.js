import React from 'react'

import Author from './Author'

export default (props) => {
    return props.authors
            .map(author => <Author key={author.id} author={author} />)
}