class Food{
    element: HTMLElement

    constructor(){
        this.element = document.querySelector('.food')!
        this.change()
    }

    //获取X轴坐标
    get X(){
        return this.element.offsetLeft
    }

    //获取Y轴坐标
    get Y(){
        return this.element.offsetTop
    }

    //改变位置
    change(){
        //生成一个随机位置，X轴最小值0，最大值350。Y轴最小值0，最大值470。并且坐标都是整10，与蛇坐标对应
        const x = Math.floor(Math.random() * 35) * 10
        const y = Math.floor(Math.random() * 47) * 10

        this.element.style.left = `${x}px`
        this.element.style.top = `${y}px`
    }
}


export default Food