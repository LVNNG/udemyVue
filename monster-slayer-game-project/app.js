const app = Vue.createApp({
    data() {
        return {
            mHealth: 100,
            pHealth: 100,
            currentRound: 0,
            healCount: 0,
            healCountExceed: "",
            result: null,
            logMessages: []
        }
    },
    computed: {
        mBarStyles: function() {
            if (this.mHealth <= 0){
                return {'width':'0%'};
            }
            return {'width': this.mHealth + '%'};
        },
        pBarStyles: function() {
            if (this.pHealth <= 0){
                return {'width':'0%'};
            }
            return {'width': this.pHealth + '%'};
        },
    },
    methods: {
        attackMonster: function() {
            var damageDealt = Math.floor(Math.random() * (12-5)) + 5;
            this.mHealth -= damageDealt;
            this.addLogMessage('Player', "Attacked", damageDealt)
            this.attackPlayer();
            this.currentRound ++;
        },
        attackPlayer : function() {
            var damageDealt = Math.floor(Math.random() * (15 - 8)) + 8;
            this.pHealth -= damageDealt;
            this.addLogMessage('Monster', "Attacked", damageDealt)

        },
        specialAttackMonster: function() {
            var damageDealt = Math.floor(Math.random() * (25-5))+ 10;
            this.mHealth -= damageDealt;
            this.addLogMessage('Player', "Attacked", damageDealt)
            this.attackPlayer();
            this.currentRound ++;
        },
        healPlayer: function() {
            if (this.pHealth < 100){
                var healValue = Math.floor(Math.random() * (20-5));
                if (this.pHealth + healValue >= 100){
                    this.pHealth = 100;
                    this.addLogMessage('Player', "Heal", 100-this.pHealth)
                    this.healCount ++;
                    return;
                }
                this.pHealth += healValue;

                this.addLogMessage('Player', "Heal", healValue)
                this.healCount ++;
            }
        },
        restart: function() {
            this.pHealth = 100;
            this.mHealth = 100;
            this.currentRound = 0;
            this.healCount = 0;
            this.healCountExceed = "";
            this.result = null;
            this.logMessages = [];
        },
        addLogMessage: function(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    },
    watch: {
        healCount(value){
            if (value > 5){
                this.healCountExceed = "<i>out of potions brah</i>";
            }
        },
        pHealth(value){
            if (value <= 0){
                // game over
                this.result = "lose";
            } else if (value <=0 && this.mHealth <=0){
                // draw
                this.result="draw";
            }
        },
        mHealth(value){
            if (value <=0){
                // win
                this.result="win";
            }
        }
    }
});

app.mount('#game');


