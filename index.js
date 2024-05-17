function superbowlWin (record) {
 
  const seasonResult = record.find((record) => {
    return record["result"] === "W"})
  
  if (seasonResult) {
    return seasonResult.year 
  }    
} 

superbowlWin ()
