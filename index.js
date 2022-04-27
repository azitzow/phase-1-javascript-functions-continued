// code your solution here
const saturdayFun = (param) => {
  if (param !== undefined) {
    return `This Saturday, I want to ${param}!`;
  }
  return 'This Saturday, I want to roller-skate!';
}

const mondayWork = (param) => {
  if (param !== undefined) {
    return `This Monday, I will ${param}.`;
  }
  return 'This Monday, I will go to the office.';
}

const wrapAdjective = (flair = '*') => {
  return (str = 'special') => {
    return `You are ${flair}${str}${flair}!`;
  }
}