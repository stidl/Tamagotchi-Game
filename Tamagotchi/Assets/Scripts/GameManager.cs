using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;



public class GameManager : MonoBehaviour
{
    public Image currentHappy;
    public Image currentHygiene;
    public Image currentHunger;
    public Image currentSleep;

    public float happiness = 100;
    public float hygiene = 100;
    public float hunger = 100;
    public float sleep = 100;
    public float max = 100;
    
    public Text HungryText;
    public Text HappyText;
    public Text HygieneText;
    public Text SleepText;

    //Pet 1
    public Image petSad;
    public Image petHappy;
   
   //Pet 2
    public Image pet2Sad;
    public Image pet2Happy;

    public Image foodBubble;
    public Image playBubble;
    public Image cleanBubble;
    public Image sleepBubble;


    public GameObject nameText;
    public int petNumber =  NameTransfer.CharacterInt;
    // Start is called before the first frame update
    void Start()
    {
       
        //get the chosen pet from character creator
        if (NameTransfer.CharacterInt == 1){
            petHappy.gameObject.SetActive(true);
            pet2Happy.gameObject.SetActive(false);
        } else if (NameTransfer.CharacterInt == 2){
            petHappy.gameObject.SetActive(false);
            pet2Happy.gameObject.SetActive(true);
        }

        //disable sad pet image at start
        petSad.gameObject.SetActive(false);
        pet2Sad.gameObject.SetActive(false);

        //display pet name
        nameText.GetComponent<Text>().text = NameTransfer.Name;

        //disable the needs-bubbles
        foodBubble.CrossFadeAlpha(0, 0.001f, true);
        playBubble.CrossFadeAlpha(0, 0.001f, true);
        cleanBubble.CrossFadeAlpha(0, 0.001f, true);
        sleepBubble.CrossFadeAlpha(0, 0.001f, true);


    // Update is called once per frame
    void Update()
    {
        //Deplenish Hunger over Time
        hunger -= 6f * Time.deltaTime;
        if (hunger <0) 
        {
            hunger = 0;
        }

        //Deplenish Happiness over Time
        happiness -= 5.75f * Time.deltaTime;
        if (happiness <0) 
        {
            happiness = 0;
        }

        //Deplenish Hygiene over Time
        hygiene -= 5.25f * Time.deltaTime;
        if (hygiene <0) 
        {
            hygiene = 0;
        }

        //Deplenish Sleep over Time
        sleep -= 5f * Time.deltaTime;
        if (sleep <0) 
        {
            sleep = 0;
        }


        //needsCkeck funktion bei jedem Frame überrpüft
        NeedsCheck();
        SatisfiedPetCheck();

        UpdateHungerBar();
        UpdateFunBar();
        UpdateHygieneBar();
        UpdateSleepBar();

        GameOver();

        Debug.Log("Main CaracterInt" + petNumber);
    }

    private void UpdateHungerBar(){
        float ratio = hunger / max;
        currentHunger.rectTransform.localScale = new Vector3(ratio, 1, 1);
        HungryText.text = "Hunger: " + (ratio * 100).ToString("0") + '%';
    }

    private void UpdateFunBar(){
        float ratio = happiness / max;
        currentHappy.rectTransform.localScale = new Vector3(ratio, 1, 1);
        HappyText.text = "Fun: " + (ratio * 100).ToString("0") + '%';
    }

    private void UpdateHygieneBar(){
        float ratio = hygiene / max;
        currentHygiene.rectTransform.localScale = new Vector3(ratio, 1, 1);
        HygieneText.text = "Hygiene: " + (ratio * 100).ToString("0") + '%';
    }

    private void UpdateSleepBar(){
        float ratio = sleep / max;
        currentSleep.rectTransform.localScale = new Vector3(ratio, 1, 1);
        SleepText.text = "Energy: " + (ratio * 100).ToString("0") + '%';
    }

    void FeedThePet(){
        //Debug.Log("Feed Button has been clicked");
        hunger += 10;
        if (hunger > max){
            hunger = max;
        }
    }

    void PlayThePet(){
        //Debug.Log("Feed Button has been clicked");
        happiness += 10;
        if (happiness > max){
            happiness = max;
        }
    }

    void CleanThePet(){
        //Debug.Log("Feed Button has been clicked");
        hygiene += 10;
        if (hygiene > max){
            hygiene = max;
        }
    }

    void SleepThePet(){
        //Debug.Log("Feed Button has been clicked");
        sleep += 10;
        if (sleep > max){
            sleep = max;
        }
    }

    private void NeedsCheck(){
        if(hunger <= 50){
            foodBubble.CrossFadeAlpha(1, 0.5f, true);
        }else{
            foodBubble.CrossFadeAlpha(0, 0.5f, true);
        }
        if(happiness <= 40){
            playBubble.CrossFadeAlpha(1, 0.5f, true);
        }else{
            playBubble.CrossFadeAlpha(0, 0.5f, true);
        }
        if(hygiene <= 30){
            cleanBubble.CrossFadeAlpha(1, 0.5f, true);
        }else{
            cleanBubble.CrossFadeAlpha(0, 0.5f, true);
        }
        if(sleep <= 20){
            sleepBubble.CrossFadeAlpha(1, 0.5f, true);
        }else{
            sleepBubble.CrossFadeAlpha(0, 0.5f, true);
        }
    }

    private void SatisfiedPetCheck(){
        if (petNumber == 2 && happiness <=40 || hygiene <=30 || hunger <=50 || sleep <=20){
            pet2Happy.gameObject.SetActive(false);
            pet2Sad.gameObject.SetActive(true);
        } else if (petNumber == 1 && happiness <=40 || hygiene <=30 || hunger <=50 || sleep <=20){
            petHappy.gameObject.SetActive(false);
            petSad.gameObject.SetActive(true);
        }
        
       // else{
       //     pet2Happy.gameObject.SetActive(true);
        //    pet2Sad.gameObject.SetActive(false);
       // }
    public void SatisfiedPetCheck(){
    if ((petNumber == 1) && (happiness <=40 || hygiene <=30 || hunger <=50 || sleep <=20)){
        petHappy.gameObject.SetActive(false);
        petSad.gameObject.SetActive(true);
    } else if ((petNumber == 1) && (happiness >40 || hygiene >30 || hunger >50 || sleep >20)){
        petHappy.gameObject.SetActive(true);
        petSad.gameObject.SetActive(false);
    }
    
    if ((petNumber == 2) && (happiness <=40 || hygiene <=30 || hunger <=50 || sleep <=20)){
        pet2Happy.gameObject.SetActive(false);
        pet2Sad.gameObject.SetActive(true);
      } else if ((petNumber == 2) && (happiness >40 || hygiene >30 || hunger >50 || sleep >20)){
        pet2Happy.gameObject.SetActive(true);
        pet2Sad.gameObject.SetActive(false);
      }
    }

    public void SaveGame(){
        PlayerPrefs.SetFloat("hungerValue", hunger);
        PlayerPrefs.SetFloat("happinessValue", happiness);
        PlayerPrefs.SetFloat("hygieneValue", hygiene);
        PlayerPrefs.SetFloat("sleepValue", sleep);
        PlayerPrefs.SetInt("foodBtnClicks", counter);
        //PlayerPrefs.SetInt("petType", petNumber);
        PlayerPrefs.Save();
        StartCoroutine(SaveGameText());
        Debug.Log("You just saved " + PlayerPrefs.GetFloat("hungerValue"));
    }

    IEnumerator SaveGameText(){
        gameSaved.gameObject.SetActive(true);
        yield return new WaitForSeconds(1f);
        gameSaved.gameObject.SetActive(false);
    }

    public void GameOver(){
        if(happiness <=0 || hygiene <=0 || hunger <=0 || sleep <=0){
            SceneManager.LoadScene("GameOverScene");
        } 
    }

    public void QuitGame(){
        Application.Quit();
    }
}