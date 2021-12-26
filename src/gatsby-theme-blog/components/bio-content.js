import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    This is where <Styled.a href="http://example.com/">your name</Styled.a>
    {` `}
    goes.
    <br />
    Or whatever, you make the rules.
    <div>
      <ul>
        <li>Homepage</li>
        <li>About us</li>
        <li>Drinks</li>
        <li>Recommendations</li>
        <li>Blog</li>
      </ul>
    </div>
  </Fragment>
)
