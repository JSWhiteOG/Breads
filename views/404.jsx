const React = require('react')
const Default = require('./layouts/default')

function error ({bread}) {
  console.log(bread.name)
    return (
      <Default>
        <h2>404</h2>
      </Default>
    )
}

module.exports = Error
