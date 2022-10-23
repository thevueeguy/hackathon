
function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

export default function format(inputDate: any) {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        // Months use 0 index.
        return padTo2Digits(date.getMonth()+1) + '/' + padTo2Digits(date.getDate()) + '/' + date.getFullYear();
    }
}
