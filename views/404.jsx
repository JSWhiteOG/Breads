const React = require('react')
const Default = require('../layouts/Default')

function error ({bread}) {
  console.log(bread.name)
    return (
      <Default>
        <h2>404</h2>
      </Default>
    )
}

module.exports = error
