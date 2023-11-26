const { expect } = require('chai')
const notification = require('../../lib/notification')
const sinon = require('sinon')

describe('Notification', () => {
  describe('displayFirstNotificationInQueue', () => {
    let noop

    beforeEach(() => {
      noop = sinon.stub()
      notification.queue.push(noop)
      expect(notification.queue.length).to.eq(1)
      notification.displayFirstNotificationInQueue()
    })

    it('shifts the queue', () => {
      expect(notification.queue.length).to.eq(0)
    })

    it('shifts the queue', () => {
      expect(noop).to.have.been.calledOnce
    })
  })
})
