/**
 * 非末尾节点使用button，其中的箭头只是代表子节点的展开状态
 * 莫尾节点使用li，li标签表示元数据，并且不带箭头，点击显示元数据的详细信息
 */

$('button').click(
  function () {
    // eslint-disable-next-line no-console
    console.log('点击了button')
    if ($(this).children('i').hasClass('fa-angle-left')) {
      openSubNode(this, $('div'))
    } else {
      closeSubNode(this, $('div'))
    }
  })

$('i').click(() => {
  if ($(this).children('i').hasClass('fa-angle-left')) {
    openSubNode(this, $('div'))
  } else {
    closeSubNode(this, $('div'))
  }
})

function openSubNode(currentNode, subTable) {
  closeSubNode(currentNode, subTable)
  $(currentNode).children('i').removeClass('fa-angle-left')
  $(currentNode).children('i').addClass('fa-angle-right')
  $.each(subTable, (index, element) => {
    if ($(currentNode).attr('id') != null && Number(element.id.slice(-1)) === Number($(currentNode).attr('id').slice(-1)) + 1 && element.id.includes($(currentNode).attr('id').split('_')[0])) {
      $(element).css('display', 'block')
    }
  })
}

function closeSubNode(currentNode, subTable) {
  $.each(subTable, (index, element) => {
    if ($(currentNode).attr('id') != null && element.id.slice(-1) >= $(currentNode).attr('id').slice(-1)) {
      $(element).find('i').removeClass('fa-angle-right')
      $(element).find('i').addClass('fa-angle-left')
      if (element.id.slice(-1) != $(currentNode).attr('id').slice(-1)) {
        $(element).css('display', 'none')
      }
    }
  })
  $(currentNode).children('i').removeClass('fa-angle-right')
  $(currentNode).children('i').addClass('fa-angle-left')
}

