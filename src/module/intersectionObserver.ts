export const intersectionObserver = (elements: any, options: any) => {
  const callback =  ((entries: any) => {
    entries.forEach((entry: any) => {
      if(entry.isIntersecting) {
        elements.forEach((el: any) => {
          const currentElement = el.getAttribute('element')
          if(currentElement !== null && entry.target.classList.contains(currentElement)) {
            el.classList.add('current')
          } else {
            if(!entry.target.classList.contains('')) {
              el.classList.remove('current')
            }
          }
        })
      }
    })
  })
  const observer = new IntersectionObserver(callback, options)
  elements.forEach((el: any) => {
    observer.observe(el)
  })
}