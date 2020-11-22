function hasCollided(bullet, wall){

    bulletRightEdge = bullet.x + wall.x;
    wallLeftEdge = wall.x; 

    if(bulletRightEdge>=wallLeftEdge){
        return true;
    }
    else{
        return false;
    }

}