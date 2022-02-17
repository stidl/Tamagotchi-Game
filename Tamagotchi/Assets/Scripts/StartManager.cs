using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class StartManager : MonoBehaviour
{
   
public GameObject noSave;

    public void NewGame(){
        SceneManager.LoadScene("CharactorCreatorScene");
    }

    public void LoadGame(){

        if(PlayerPrefs.GetFloat("hungerValue") == 0){
        StartCoroutine(NoSaveGameText());
        }else{
        SceneManager.LoadScene("LoadSaveScene");
        }
        
    }

    public void QuitGame(){
        Application.Quit();
    }
   
   
    // Start is called before the first frame update
    void Start()
    {
         //disable no game saved display
       noSave.gameObject.SetActive(false);
    }

        IEnumerator NoSaveGameText(){
        noSave.gameObject.SetActive(true);
        yield return new WaitForSeconds(1f);
        noSave.gameObject.SetActive(false);
    }


    // Update is called once per frame
    void Update()
    {
        
    }
}
