const issues =
  [
    {
      "domain": "Regular Language",
      "terms": [
        {
          "value": "Cannot View Site without Accepting",
          "laws": [

            {
              "lawName": "GDPR Recital 42 ",
              "lawDescription": "Consent should not be regarded as freely given if the data subject has no genuine or free choice or is unable to refuse or withdraw consent without detriment."
            }
          ]
        },
        {
          "value": "There is no reject button.",
          "laws": [

            {
              "lawName": "GDPR Article 4 (11)",
              "lawDescription": "Consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If there is no reject button an affirmative action to not consent cannot be made."
            }
          ]
        },
        {
          "value": "Some options are pre-selected.",
          "laws": [

            {
              "lawName": "GDPR Article 4 (11)",
              "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If choices are pre-selected an affirmative choice to accept these has not been made."
            }
          ]
        },
        {
          "value": "There is not Separate consent per purpose",
          "laws": [

            {
              "lawName": "GDPR Article 4 (11)",
              "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If there is not seperate consent per purpose the consent is not specific."
            },
            {
              "lawName": "GDPR Article 6(1) a ",
              "lawDescription": "Processing shall be lawful only if  the data subject has given consent to the processing of his or her personal data for one or more specific purposes. In this case the user could not specify consent for a specific purpose."
            }
          ]
        },
        {
          "value": "The language used is unclear/hard to understand",
          "laws": [

            {
              "lawName": "GDPR Article 7(2)",
              "lawDescription": "If the data subject’s consent is given in the context of a written declaration which also concerns other matters, the request for consent shall be presented in a manner which is clearly distinguishable from the other matters, in an intelligible and easily accessible form, using clear and plain language. Any part of such a declaration which constitutes an infringement of this Regulation shall not be binding."
            }
          ]
        },
        {
          "value": "Impossible to change my decision",
          "laws": [

            {
              "lawName": "GDPR Article 7(3)",
              "lawDescription": "The data subject shall have the right to withdraw his or her consent at any time. 2The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. 3Prior to giving consent, the data subject shall be informed thereof. 4It shall be as easy to withdraw as to give consent."
            }
          ]
        }

      ]
    },

    {
      "domain": "Law",
      "terms": [
        {
          "value": "Requires merging into a contract.",
          "laws": [

            {
              "lawName": "GDPR Article 7 (2)",
              "lawDescription": "If the data subject’s consent is given in the context of a written declaration which also concerns other matters, the request for consent shall be presented in a manner which is clearly distinguishable from the other matters, in an intelligible and easily accessible form, using clear and plain language. Any part of such a declaration which constitutes an infringement of this Regulation shall not be binding."
            },
            {
              "lawName": "GDPR Article 7 (4)",
              "lawDescription": "When assessing whether consent is freely given, utmost account shall be taken of whether, inter alia, the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract."
            },
            {
              "lawName": "GDPR Recital 43",
              "lawDescription": "In order to ensure that consent is freely given, consent should not provide a valid legal ground for the processing of personal data in a specific case where there is a clear imbalance between the data subject and the controller, in particular where the controller is a public authority and it is therefore unlikely that consent was freely given in all the circumstances of that specific situation. 2Consent is presumed not to be freely given if it does not allow separate consent to be given to different personal data processing operations despite it being appropriate in the individual case, or if the performance of a contract, including the provision of a service, is dependent on the consent despite such consent not being necessary for such performance."
            }
          ]
        },
        {
          "value": "Consent was not Freely Given",
          "laws": [

            {
              "lawName": "GDPR Article 4(11)",
              "lawDescription": "Consent of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her."
            },
            {
              "lawName": "GDPR Article 7(4)",
              "lawDescription": "When assessing whether consent is freely given, utmost account shall be taken of whether, inter alia, the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract."
            }
          ]
        },
        {
          "value": "Consent was not Specific",
          "laws": [

            {
              "lawName": "GDPR Article 4(11)",
              "lawDescription": "Consent of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her."
            }
          ]
        },
        {
          "value": "Consent was not informed.",
          "laws": [

            {
              "lawName": "GDPR Article 4(11)",
              "lawDescription": "Consent of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her."
            }
          ]
        },
        {
          "value": "Consent was ambigious.",
          "laws": [

            {
              "lawName": "GDPR Article 4(11)",
              "lawDescription": "Consent of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her."
            }
          ]
        },
        {
          "value": "Not readable and accessible",
          "laws": [

            {
              "lawName": "GDPR Article 7(2)",
              "lawDescription": "If the data subject’s consent is given in the context of a written declaration which also concerns other matters, the request for consent shall be presented in a manner which is clearly distinguishable from the other matters, in an intelligible and easily accessible form, using clear and plain language. Any part of such a declaration which constitutes an infringement of this Regulation shall not be binding."
            }
          ]
        },
        {
          "value": "Consent was not Revocable",
          "laws": [

            {
              "lawName": "GDPR Article 7(3)",
              "lawDescription": "The data subject shall have the right to withdraw his or her consent at any time. 2The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. 3Prior to giving consent, the data subject shall be informed thereof. 4It shall be as easy to withdraw as to give consent."
            }
          ]
        }
      ]
    },

    {
      "domain": "UI",
      "terms": [
        {
          "value": "UI Consent Buttons are different colours.",
          "laws": [

            {
              "lawName": "Article 7(4)",
              "lawDescription": "When assessing whether consent is freely given, utmost account shall be taken of whether… the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract"
            },
            {
              "lawName": "Article 7(5)",
              "lawDescription": " 2 Assessing whether consent is freely given, utmost account shall be taken of whether… the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract"
            }
          ]
        },
        {
          "value": "UI There is no reject button.",
          "laws": [

            {
              "lawName": "Article 7(4)",
              "lawDescription": "When assessing whether consent is freely given, utmost account shall be taken of whether… the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract"
            }
          ]
        },
        {
          "value": "UI I do not know what I am consenting to.",
          "laws": [

            {
              "lawName": "Article 7(4)",
              "lawDescription": "When assessing whether consent is freely given, utmost account shall be taken of whether… the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract"
            }
          ]
        },
        {
          "value": "UI Choice 'accept all' is pre-highlighted",
          "laws": [

            {
              "lawName": "Article 7(4)",
              "lawDescription": "When assessing whether consent is freely given, utmost account shall be taken of whether… the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract"
            }
          ]
        }
      ]
    }

  ]
export default issues