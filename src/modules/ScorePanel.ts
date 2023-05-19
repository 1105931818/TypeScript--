//计分牌
class ScorePanel{
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelELe: HTMLElement

    //设置一个变量限制等级
    maxlevel: number

    //设置一个变量，多少分升级
    upscore: number

    constructor(maxlevel: number = 10 , upscore: number = 10){
        this.maxlevel = maxlevel
        this.upscore = upscore
        this.scoreEle = document.querySelector('#score')!
        this.levelELe = document.querySelector('#level')!
    }

    //加分
    addScore(){
        this.scoreEle.innerHTML = ++this.score + ''

        if (this.score % this.upscore === 0){
            this.levelUp()
        }
    }

    //升级
    levelUp(){
        if (this.level < this.maxlevel) {
            this.levelELe.innerHTML = ++this.level + ''
        }
    }
}

export default ScorePanel