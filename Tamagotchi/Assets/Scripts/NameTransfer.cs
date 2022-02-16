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
    public GameObject textDisplay;

    public static int CharacterInt = 1;

    public void StoreName(){
        Name = inputField.GetComponent<Text>().text;
        textDisplay.GetComponent<Text>().text = Name;

    }

    private void Awake()
    {
        pet2.gameObject.SetActive(false);
    }

    public void NextCharacter()
    {
        switch(CharacterInt){
        case 1:
            pet1.gameObject.SetActive(false);
            pet2.gameObject.SetActive(true);
            CharacterInt++;
            break;
        case 2:
            CharacterInt++;
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
        if (CharacterInt >=2){
            CharacterInt = 1;
        } else {
            CharacterInt = 3;
        }
    }

    // Update is called once per frame
    void Update()
    {
        Debug.Log("CharacterInt:" + CharacterInt);
    }
}
