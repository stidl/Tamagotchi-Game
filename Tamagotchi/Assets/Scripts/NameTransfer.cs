using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;


public class NameTransfer : MonoBehaviour
{
    public GameObject pet1;
    public GameObject pet2;

    public static string Name;

    public GameObject inputField;
    //public GameObject textDisplay;

    public static int characterInt = 1;

    public void StoreName(){
        Name = inputField.GetComponent<Text>().text;
        //textDisplay.GetComponent<Text>().text = Name;
        PlayerPrefs.SetString("Name", Name);
        PlayerPrefs.SetInt("petType", characterInt);
        Debug.Log("Your name is " + PlayerPrefs.GetString("Name"));
    }

    private void Awake()
    {
        pet2.gameObject.SetActive(false);
    }

    public void NextCharacter()
    {
        switch(characterInt){
        case 1:
            pet1.gameObject.SetActive(false);
            pet2.gameObject.SetActive(true);
            characterInt++;
            break;
        case 2:
            characterInt++;
            pet1.gameObject.SetActive(true);
            pet2.gameObject.SetActive(false);
            ResetInt();
            break;
        default: 
            ResetInt();
            break;
        }
    }

        public void ChangeScene(){
        SceneManager.LoadScene("MainScene");
    }

    private void ResetInt(){
        if (characterInt >=2){
            characterInt = 1;
        } else {
            characterInt = 3;
        }
    }

    // Update is called once per frame
    void Update()
    {
        //Debug.Log("CharacterInt:" + CharacterInt);
    }
}
