const bodyScroll = () => {
  document.body.style.overflowX = 'auto'
}

const bodyNoScroll = () => {
  document.body.style.overflowX = 'hidden'
}

export default {
  name: 'page',
  duration: 500,
  beforeLeave: bodyNoScroll,
  beforeEnter: bodyNoScroll,
  afterEnter: bodyScroll,
  afterLeave: bodyScroll,
  leaveCancelled: bodyScroll,
  enterCancelled: bodyScroll
}
