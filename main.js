function calc_total_tasks(numStories, avgTask){
    return numStories * avgTask
}

const estimate = new Vue({
    el: '#task_estimator',
    data: {
        input1: 2,
        input2: 3
    },
    computed: {
        result: function () {
            const x = parseInt(this.input1)
            const y = parseInt(this.input2)
            return `The estimated number of tasks is ${calc_total_tasks(x, y)}.`
        }
    }
})