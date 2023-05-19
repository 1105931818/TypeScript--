class Snake{
    //设置蛇头
    head: HTMLElement

    //蛇的身体,HTMLCollection实时更新的集合
    bodies: HTMLCollection

    //蛇
    element: HTMLElement

    constructor(){
        this.head = document.querySelector('.snake > div')!
        this.bodies = document.querySelector('.snake')!.getElementsByTagName('div')
        this.element = document.querySelector('.snake')!
        this.X = Math.floor(Math.random() * 36) * 10
        this.Y = Math.floor(Math.random() * 48) * 10
        this.moveBody()
    }

    //获取蛇头X轴坐标
    get X(){
        return this.head.offsetLeft
    }
    //获取蛇头Y轴坐标
    get Y(){
        return this.head.offsetTop
    }
    //设置蛇头X坐标
    set X(value: number){
        if (this.X === value) {
            return
        }
        if (value < 0 || value > 350) {
            throw new Error("蛇撞墙了！！！,游戏结束！！！")
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if(value > this.X){
                value = this.X - 10
            }else{
                value = this.X + 10
            }
        }

        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkhead()
    }
    set Y(value: number){
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > 470) {
            throw new Error("蛇撞墙了！！！,游戏结束！！！")
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if(value > this.Y){
                value = this.Y - 10
            }else{
                value = this.Y + 10
            }
        }

        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkhead()
    }

    //增加蛇的长度
    addBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    //身体移动
    moveBody(){
        //将后面身子的位置设置为前面身子的位置，先移动后面的身子，否则找不到前面身子的位置
        for(let i = this.bodies.length - 1; i > 0 ; i--){
            (this.bodies[i] as HTMLElement).style.left = (this.bodies[i - 1] as HTMLElement).offsetLeft + 'px';
            (this.bodies[i] as HTMLElement).style.top = (this.bodies[i - 1] as HTMLElement).offsetTop + 'px';
        }
    }

    //检查头部与身体位置
    checkhead(){
        for (let i = 1; i < this.bodies.length; i++){
            if(this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop){
                throw new Error("蛇吃到自己了！！！游戏结束！！！")
            }
        }
    }
}


export default Snake