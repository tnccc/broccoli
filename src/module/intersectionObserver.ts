export const intersectionObserver = (
  elements: any,
  target: any,
  options: any,
  classNames: { data: string, remove: string, removeSecond: string }
) => {
  const { data, remove, removeSecond } = classNames
  const callback =  ((entries: any) => {
    entries.forEach((entry: any) => {
      if(entry.isIntersecting) {
        elements.forEach((el: any) => {
          const currentElement = el.getAttribute(data)
          if(currentElement !== null && entry.target.classList.contains(currentElement)) {
            el.classList.add('current')
          } else {
            if(!entry.target.classList.contains(remove) || !entry.target.classList.contains(removeSecond)) {
              el.classList.remove('current')
            }
          }
        })
      }
    })
  })
  const observer = new IntersectionObserver(callback, options)
  target.forEach((el: any) => {
    observer.observe(el)
  })
}