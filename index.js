export default class CountDown {
  constructor(option) {
    this.isMs = option.isMs
    this.container = document.querySelector(option.container || 'body')
    this.endTime = option.endTime
    this.callBack = option.callBack
    this.init()
  }

  init() {
    this.render()
    this.bindEvent();
  }

  render() {
    let el = document.createElement('div')
    el.style.fontSize = 0
    el.innerHTML = `
      <div class="box" style="display: inline-block"  style="display: inline-block">
        <div id="t_d" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px">天</span>
      </div>
      <div class="box" style="display: inline-block">
        <div id="t_h" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px">时</span>
      </div>
      <div class="box" style="display: inline-block">
        <div id="t_m" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px">分</span>
      </div>
      <div class="box" style="display: inline-block">
        <div id="t_s" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="display: inline-block;font-size: 12px">秒</span>
      </div>
      <div class="none box" id="ms" style="display: none;">
        <div id="t_ms" class="box_num" style="display: inline-block;font-size: 12px"></div>
        <span class="box_unit" style="font-size: 12px;">分秒</span>
      </div>
    `
    this.container.appendChild(el)
    if (this.isMs) {
      document.querySelector('#ms').style.display = 'inline-block'
    }
  }

  bindEvent() {
    let {endTime} = this
    if(typeof endTime !== "number") {
      endTime = new Date(endTime).getTime()
    }
    let time = endTime - new Date().getTime(),
      day    = Math.floor(time / 1000 / 60 / 60 / 24) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60 / 24),
      hour   = Math.floor(time / 1000 / 60 / 60 % 24) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60 % 24),
      minute = Math.floor(time / 1000 / 60 % 60) < 0 ? 0 : Math.floor(time / 1000 / 60 % 60),
      second = Math.floor(time / 1000 % 60) <= 0 ? 0 : Math.floor(time / 1000 % 60),
      ms     = Math.floor(time % 1000 / 100) <= 0 ? 0 : Math.floor(time % 1000 / 100)

    document.querySelector('#t_d').innerHTML = day
    document.querySelector('#t_h').innerHTML = hour
    document.querySelector('#t_m').innerHTML = minute
    document.querySelector('#t_s').innerHTML = second
    document.querySelector('#t_ms').innerHTML = ms

    let timer = setTimeout(() => {
      this.bindEvent()
    }, 1)

    if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0  && ms <= 0) {
      clearTimeout(timer)
      this.callBack && this.callBack()
    }
  }
}