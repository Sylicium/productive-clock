
// Create a class ProductiveClock that extends Date and is based on the following requirements:
// One minute has 60 seconds
// One hour has 60 minutes
// One day has 32 hours
// One week has 5 days
// One month has 4 weeks

class ProductiveClock extends Date {
    
    static BASE_DATE = new Date('2025-01-01T00:00:00+01:00');

    constructor(time?: number | string | Date) {
        super();
        if (time != null) {
            super.setTime(time instanceof Date ? time.getTime() : new Date(time).getTime());
        }
    }

    static now() {
        return super.now();
    }

    static timeNow() {
        return (new ProductiveClock()).toTimeString();
    }

    toTimeString() {
        return `${this.getHours().toString().padStart(2, '0')}:${this.getMinutes().toString().padStart(2, '0')}:${this.getSeconds().toString().padStart(2, '0')}`;
    }

    getSeconds() {
        return Math.floor((this.getTime() - ProductiveClock.BASE_DATE.getTime()) / 1000) % 60;
    }

    getMinutes() {
        return Math.floor((this.getTime() - ProductiveClock.BASE_DATE.getTime()) / 60000) % 60;
    }

    getHours() {
        return Math.floor((this.getTime() - ProductiveClock.BASE_DATE.getTime()) / 3600000) % 32;
    }

    getDays() {
        return Math.floor((this.getTime() - ProductiveClock.BASE_DATE.getTime()) / 115200000) % 5;
    }

    getWeeks() {
        return Math.floor((this.getTime() - ProductiveClock.BASE_DATE.getTime()) / 576000000) % 4;
    }

    getMonths() {
        return Math.floor((this.getTime() - ProductiveClock.BASE_DATE.getTime()) / 2304000000);
    }

    getYears() {
        return Math.floor((this.getTime() - ProductiveClock.BASE_DATE.getTime()) / 27648000000);
    }

    getJSONDate() {
        return {
            years: this.getYears(),
            months: this.getMonths(),
            weeks: this.getWeeks(),
            days: this.getDays(),
            hours: this.getHours(),
            minutes: this.getMinutes(),
            seconds: this.getSeconds(),
            text: {
                time: this.toTimeString(),
                date: this.toLocaleString()
            }
        }
    }

    toLocaleDateString() { // '03/01/2025' | DD/MM/YYYY
        return `${this.getDate().toString().padStart(2, '0')}/${(this.getMonth() + 1).toString().padStart(2, '0')}/${this.getFullYear()}`;
    }

    toLocaleString() { // '03/01/2025 31:01:37' | DD/MM/YYYY HH:MM:SS
        return `${this.toLocaleDateString()} ${this.toTimeString()}`;
    }
}

export default ProductiveClock;