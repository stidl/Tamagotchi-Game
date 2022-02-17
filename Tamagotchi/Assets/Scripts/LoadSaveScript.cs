using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class LoadSaveScript : MonoBehaviour
{

public Text nameText;
public Text typeOfPetText;
public Text hungerText;
public Text hygieneText;
public Text funText;
public Text energyText;
public Text numberOfClicksText;

public static bool loadSave = false;
    // Start is called before the first frame update
    void Start()
    {
        nameText.text = PlayerPrefs.GetString("Name");
        typeOfPetText.text = PlayerPrefs.GetInt("petType").ToString();
        hungerText.text = PlayerPrefs.GetFloat("hungerValue").ToString();
        hygieneText.text = PlayerPrefs.GetFloat("hygieneValue").ToString();
        funText.text = PlayerPrefs.GetFloat("happinessValue").ToString();
        energyText.text = PlayerPrefs.GetFloat("sleepValue").ToString();
        numberOfClicksText.text = PlayerPrefs.GetInt("foodBtnClicks").ToString();
    }
     public void DeleteSave(){
        PlayerPrefs.DeleteAll();
        nameText.text = PlayerPrefs.GetString("Name");
        typeOfPetText.text = PlayerPrefs.GetInt("petType").ToString();
        hungerText.text = PlayerPrefs.GetFloat("hungerValue").ToString();
        hygieneText.text = PlayerPrefs.GetFloat("hygieneValue").ToString();
        funText.text = PlayerPrefs.GetFloat("happinessValue").ToString();
        energyText.text = PlayerPrefs.GetFloat("sleepValue").ToString();
        numberOfClicksText.text = PlayerPrefs.GetInt("foodBtnClicks").ToString();
    }
