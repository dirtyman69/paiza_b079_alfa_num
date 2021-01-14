process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    var line = lines[0].split(" ");
    var word1 = line[0];
    var word2 = line[1];
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const word1_number = word1.split('').map((str) => alphabet.indexOf(str) + 1);
    const word2_number = word2.split('').map((str) => alphabet.indexOf(str) + 1);
    var num_list = word1_number.concat(word2_number);//[ 16, 1, 9, 26, 1 ]
    var num_list2 = word2_number.concat(word1_number);//[  9, 26, 1, 16, 1,]
    var m = num_list.length;
    var n_list2 = num_list2;
    var n_list = num_list;
    while (n_list.length != 1) {
        var tmp = [];
            for(i = 0; i < n_list.length - 1; i++){
                var num_tmp = Number(n_list[i]) + Number(n_list[i+1]);
                    if(num_tmp > 101){
                        num_tmp = num_tmp - 101
                                }
                    tmp.push(num_tmp)
                    }
                n_list = tmp;
        
                }
    
    
    while (n_list2.length != 1) {
        var tmp2 = [];
    
        for(j = 0; j < n_list2.length - 1; j++){
            var num_tmp2 = Number(n_list2[j]) + Number(n_list2[j+1]);
                if(num_tmp2 > 101){
                    num_tmp2 = num_tmp2 - 101
                }
            tmp2.push(num_tmp2)
          }
        n_list2 = tmp2;
        
        }  
    

    if(n_list > n_list2){
        console.log(n_list[0])
    }else{
        console.log(n_list2[0])
    }
});
