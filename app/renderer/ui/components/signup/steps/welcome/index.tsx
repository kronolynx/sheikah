import * as React from "react"

import { ButtonLink } from "../../../button/index"
import { CardDefault } from "../../../card/index"

const styles = require("./style.scss")

export interface Iprops {
  className?: any
  nextStep: any
}

/**
 * Step welcome UI component
 *
 * @export
 * @class Welcome
 * @extends {React.Component<Iprops>}
 */

export default class Welcome extends React.Component<Iprops> {
  /** render */
  // tslint:disable-next-line:prefer-function-over-method
  public render() {
    const classNameCard = `${styles.card} ${this.props.className}`

    return (
      <CardDefault className={classNameCard} title="Hey, listen!">
        <p className={styles.subtitle}>
          This assitant wil guide you through the process of creating your own Witnet wallet.
        </p>
        <p className={styles.text}>
          A wallet is an app that keeps your credentials safe and lets you interface with the
          Witnet blockchain in may ways: from transferring Wit to someone else to creating
          smart contracts.
        </p>
        <div className={styles.link}>
          <ButtonLink text="Let's do this" onClick={this.props.nextStep}/>
        </div>
      </CardDefault>
    )
  }
}
