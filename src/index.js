module.exports = function check(str, bracketsConfig) {
    let string = str.split('');
    let data = [];
    for(let b = 0; b < string.length; b++){
        let char = string[b];
        for (let i = 0; i < bracketsConfig.length; i++){
            let open = bracketsConfig [i][0];
            let close = bracketsConfig [i][1];
            let last = data[data.length-1];
            if (open == close){
                if (char == open){
                    if (last == open) {
                        data.splice(-1,1);
                    } else if (last != open){
                        data.push(char);
                    } else {
                        if (data.length == 0){
                            return false;
                        }
                    }
                }

            } else {
                if (open == char) {
                    data.push(char);
                }
                if (close == char) {
                    if (data.length == 0){
                        return false;
                    }
                    if (last == open){
                        data.splice(-1,1);
                    } else {
                        return false;
                    }
                }
            }
        }
    }
    if (data.length == 0){
        return true;
    } else {
        return false;
    }

}
