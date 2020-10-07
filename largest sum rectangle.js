/* helper function */
window.log = function(message) { 
		console.log(message);
    document.getElementById("messages").innerHTML += `<br>${message}`;
}

function LargestMaximalRectangleBrute(arr) 
{
window.log('LargestMaximalRectangleBrute')
		const H = arr.length
    const W = arr[0].length
              window.log(`W ${W} H ${H}`)

		if(H == 0 || W == 0)
    	return 0

		let rect = [0,0,0,0]
    let maxSum = 0
  	for(let j=0;j<H;j++) {
	    for(let i=0;i<W;i++) {
              window.log(`j ${j} i ${i}`)


		  	for(let j2=j;j2<H;j2++) {
	  		  for(let i2=i;i2<W;i2++) {
  			
      
        let sum = 0
        for(let js=j;js<j2;js++) {
	  		  for(let is=i;is<i2;is++) {
  					sum += arr[is][js]
      		}
    		}
        window.log(sum)
        if(sum > maxSum) {
        	maxSum = sum
          rect = [i,j,i2,j2]
        }
        
        
      		}
    		}

      }
    }

    return [rect,maxSum]
}

function LargestMaximalRectangle(arr) 
{
		const H = arr.length
		window.log(H)
    const W = arr[0].length
		window.log(W)

		if(H == 0 || arr[0].length == 0)
    	return 0
      

		// setup DP table 
    let dp=new Array(H).fill([]).map(
    	() => new Array(W).fill(0)
    )


		let answer = 0

		// kind of an edge filter
		for(let row=0;row < H; row++) {
			for(let col=0;col < W; col++) {
				if(arr[row][col] == 1) {
        	dp[row][col] = 1
        	if(row > 0 && col > 0) {
          	dp[row][col] += Math.min(
            dp[row-1][col],
            dp[row][col-1],
            dp[row-1][col-1]
            )
          }
          answer = Math.max(answer, dp[row][col])
        }
			}
    }
      
 		window.log(arr)
		window.log(dp)
    return answer
}

/*
window.log(LargestMaximalRectangle([
[1,0,1,0,0],
[1,0,1,1,1],
[1,1,1,1,1],
[1,0,0,1,0]
]))

window.log(LargestMaximalRectangle([
[1,0,1,0],
[1,0,1,1],
[1,1,1,1],
[1,0,1,1],
[1,1,1,1],
[1,0,0,1]
]))


window.log(LargestMaximalRectangle([
[1,0,1,0,0,0,0],
[1,0,1,1,1,1,1],
[1,1,1,1,1,1,1],
[1,0,0,1,0,0,0]
]))

window.log(LargestMaximalRectangle([
[1,0,1,0,0],
[1,0,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,0,0,1,0]
]))

window.log(LargestMaximalRectangle([
[1,0,1,0,0,0],
[1,0,1,1,1,1],
[1,1,1,1,1,1],
[1,0,1,1,1,1],
[1,1,1,1,1,1],
[1,0,0,1,0,0]
]))
*/

window.log(LargestMaximalRectangleBrute([
[1,0,1,0,0,0],
[1,0,1,1,1,1],
[1,1,1,1,1,1],
[1,0,1,1,1,1],
[1,1,1,1,1,1],
[1,0,0,1,0,0]
]))



