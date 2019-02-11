/**
 * @file 随机数通用文件
 * @author liyuqiang
 */

const getRandomNum = num => {
  return Math.ceil(Math.random() * num)
}

exports.getRandomNum = getRandomNum

const getRandomNumArr = (len, num) => {
  let arr = []

  for(let i = 0; i < len; i++) {
    while(true) {
      let item = getRandomNum(num)

      if(arr.indexOf(item) === -1) {
        arr.push(item)
        break
      }
    }
  }

  return arr
}

exports.getRandomNumArr = getRandomNumArr
