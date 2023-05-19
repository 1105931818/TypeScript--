import ScorePanel from "./ScorePanel"
import Snake from "./Snake"
import Food from "./Food"

class GameControl{

    //计分牌
    scorepanel: ScorePanel

    //贪吃蛇
    snake: Snake

    //食物
    food: Food

    //蛇移动的方向
    direction: string = ''

    //记录游戏是否结束
    isLive: boolean = true

    constructor(){
        this.scorepanel = new ScorePanel()
        this.snake = new Snake()
        this.food = new Food()
        this.init()
    }

    //初始化游戏
    init(){
        document.addEventListener('keydown', this.keydownhandler.bind(this))
        this.run()
    }

    //键盘响应函数
    /* 
        ArrowDown  下
        ArrowUp    上
        ArrowRight 右
        ArrowLeft  左
    */
    keydownhandler(event: KeyboardEvent){
        this.direction = event.key
        
    }

    run(){
        let x = this.snake.X
        let y = this.snake.Y

        switch(this.direction){
            case "ArrowDown" :
                y += 10
                break
            
            case "ArrowUp" :
                y -= 10
                break

            case "ArrowRight" :
                x += 10
                break

            case "ArrowLeft" :
                x -= 10
                break
        }

        this.checkEat(x, y)

        try{
            this.snake.X = x
            this.snake.Y = y
        }catch(e: any){
            this.isLive = false
            alert(e.message)

        }
        

        this.isLive &&  setTimeout(this.run.bind(this), 200 - (this.scorepanel.level - 1) * 20)
    }

    //检测蛇是否吃到食物
    checkEat(x: number, y:number){
        if(x === this.food.X && y === this.food.Y){
            this.food.change()
            this.scorepanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl