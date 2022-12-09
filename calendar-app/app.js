const app = Vue.createApp({
    data (){
        return {
            dayList : ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],
            monthList : ["OCAK","ŞUBAT","MART","NİSAN","MAYIS","HAZİRAN","TEMMUZ","AĞUSTOS","EYLÜL","EKİM","KASIM","ARALIK"],
            today : new Date(),
            month : new Date().getMonth(),
            year : new Date().getFullYear(),
            chooseDay : new Date(),
        }
    },
    methods: {
        nextMonth(){
            this.month = this.month + 1
            
            if(this.month > 11){
                this.month = 0
                this.year = this.year + 1;
            }
        },
        prevMonth(){
            this.month = this.month - 1
            
            if(this.month < 0){
                this.month = 11
                this.year = this.year - 1;
            }
        },
        inputChanged(){
            this.month = new Date(this.chooseDay).getMonth();
            this.year = new Date(this.chooseDay).getFullYear();
        }
    },
    computed:{
        monthDays(){
            var monthDayList = [];
            var currentMonthFirstDate = new Date(this.year, this.month, 1);
            var currentMonthFirstDay = currentMonthFirstDate.getDay();

            if(currentMonthFirstDay !== 1){ 
                if(currentMonthFirstDay === 0)
                    currentMonthFirstDate = new Date(currentMonthFirstDate.setDate(currentMonthFirstDate.getDate() - 6));
                else
                    currentMonthFirstDate = new Date(currentMonthFirstDate.setDate(currentMonthFirstDate.getDate() - (currentMonthFirstDay - 1)));
            }

            for(var i = 0; i < 42; i++){
                monthDayList.push(new Date(currentMonthFirstDate));
                currentMonthFirstDate = new Date(currentMonthFirstDate.setDate(currentMonthFirstDate.getDate() + 1));
            }

            return monthDayList;
        },
    },
}).mount(".container");