function uniqueIdGenerator() {
    return Math.floor(Math.random() * 90000000) + 10000000;
}
  
module.exports = uniqueIdGenerator;