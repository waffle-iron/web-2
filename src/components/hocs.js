import { lifecycle } from 'recompose'

import database from '../database'

export const withDatabaseSubscribe = (trigger, getRefPath, getOnTrigger) => (
  lifecycle({
    componentWillMount() {
      this.databaseRef = database.ref(getRefPath(this.props))
      this.onTrigger = this.databaseRef.on(
        trigger,
        getOnTrigger(this.props)
      )
    },
    componentWillUnmount() {
      this.databaseRef.off(trigger, this.onTrigger)
    },
  })
)