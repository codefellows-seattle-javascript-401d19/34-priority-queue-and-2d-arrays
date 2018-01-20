let convertHeightToInches(person){
  let height = person.split(' ');
  if(height.length === 4){
    heightInInches = (height[0] * 12) + height[2];
  }else if(height.length === 2){
    heightInInches = height[0];
  }
  return heightInInches;
}
