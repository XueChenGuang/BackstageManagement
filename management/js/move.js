$.each($('ul'), (index, element) => {
  const node = element
  let draging = null
  // 使用事件委托，将li的事件委托给ul
  node.addEventListener('dragstart', event => {
    // firefox设置了setData后元素才能拖动！！！！
    event.dataTransfer.setData('te', event.target.textContent) // 不能使用text，firefox会打开新tab
    draging = event.target
  })

  node.addEventListener('dragover', event => {
    event.preventDefault()
    const { target } = event
    // 因为dragover会发生在ul上，所以要判断是不是li
    if (target.nodeName === 'LI' && target !== draging) {
      // _index是实现的获取index
      if (_index(draging) < _index(target)) {
        target.parentNode.insertBefore(draging, target.nextSibling)
      } else {
        target.parentNode.insertBefore(draging, target)
      }
    }
  })
})

function _index(el) {
  let index = 0
  if (!el || !el.parentNode) {
    return -1
  }

  while (el && (el = el.previousElementSibling)) {
    index++
  }

  return index
}
