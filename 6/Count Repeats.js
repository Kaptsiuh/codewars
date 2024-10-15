function countRepeats(str) {
    return str.length -  str.split('').filter((e,i)=>str[i - 1] !== e).length
}