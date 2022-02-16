    //Pet 1
    public Image petSad;
    public Image petHappy;
   
   //Pet 2
    public Image pet2Sad;
    public Image pet2Happy;
        //get the chosen pet from character creator
        if (NameTransfer.CharacterInt == 1){
            petHappy.gameObject.SetActive(true);
            pet2Happy.gameObject.SetActive(false);
        } else if (NameTransfer.CharacterInt == 2){
            petHappy.gameObject.SetActive(false);
            pet2Happy.gameObject.SetActive(true);
        }
