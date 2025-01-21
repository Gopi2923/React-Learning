import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='data:image/png;base64,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'/>
      </div>
      <div className='nav-link'>
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const styleCard = {
  
}

const RestaurantCard = (props) => {

  const { resData = {}} = props;

  const {
    cloudinaryImageId= "",
    name = "",
    cuisines = [],
    avgRating = 0,
    costForTwo = "",
    deliveryTime = 0,
  } = resData?.card?.card?.info || resData?.card?.card?.info?.sla || {};

  return (
    <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
      <div>
        <img className='res-logo' alt='res-logo' src= {'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId }/>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  )
}

const resList = [
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "485933",
          "name": "Dindigul Thalappakatti",
          "cloudinaryImageId": "cluiug5t7vmz7idrhh82",
          "locality": "Nexus",
          "areaName": "Koramangala",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "South Indian",
            "Biryani",
            "Chinese",
            "North Indian"
          ],
          "avgRating": 4.3,
          "parentId": "332",
          "avgRatingString": "4.3",
          "totalRatingsString": "1.7K+",
          "promoted": true,
          "adTrackingId": "cid=24097267~p=4~adgrpid=24097267#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=485933~eid=5f5460ab-79fd-4505-866f-73741f387a0c~srvts=1737394101362~collid=83639",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-01-21 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "24097267"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=485933&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "3454",
          "name": "Lazeez",
          "cloudinaryImageId": "7c1d4da97f19afff911c4775ad2e352a",
          "locality": "Koramangala",
          "areaName": "Koramangala",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Mughlai"
          ],
          "avgRating": 4.4,
          "parentId": "588",
          "avgRatingString": "4.4",
          "totalRatingsString": "40K+",
          "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-01-20 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                "description": "bolt!"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                      "description": "bolt!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.8",
              "ratingCount": "2.0K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=3454&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "130367",
          "name": "New Alameen Restaurant",
          "cloudinaryImageId": "b99ac6591adf4d0d83cf705a4ffad4da",
          "locality": "Ulsoor",
          "areaName": "Central Bangalore",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Kerala",
            "briyani",
            "Kebabs",
            "Indian",
            "South Indian",
            "rolls"
          ],
          "avgRating": 4,
          "parentId": "14686",
          "avgRatingString": "4.0",
          "totalRatingsString": "4.3K+",
          "promoted": true,
          "adTrackingId": "cid=24073916~p=5~adgrpid=24073916#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=130367~eid=e7eabe07-d65e-4fc6-842d-20b3e7b1f880~srvts=1737394101362~collid=83639",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 5.5,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "5.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-01-20 23:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": "",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.2",
              "ratingCount": "52"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "24073916"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=130367&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "31627",
          "name": "Hyderabad Biryaani House",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/26/4db82f98-52c0-4936-9263-c06e6041735f_66928758-3d08-4443-8b9e-b7793c519bbf.jpg",
          "locality": "7th Block",
          "areaName": "KHB Colony",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Chinese",
            "Tandoor"
          ],
          "avgRating": 4.2,
          "parentId": "2403",
          "avgRatingString": "4.2",
          "totalRatingsString": "31K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-01-20 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                "description": "bolt!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                      "description": "bolt!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹549",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.1",
              "ratingCount": "3.1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=31627&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "979759",
          "name": "Imperio Restaurant",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/14/3aac561e-583e-4618-98f4-258eda870c86_ff2bba69-6f22-4b87-a960-e893eba1277e.jpg",
          "locality": "NEXUS Mall",
          "areaName": "5th Block",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Biryani",
            "Kebabs",
            "South Indian",
            "Tandoor",
            "Beverages",
            "Ice Cream",
            "North Indian",
            "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "5610",
          "avgRatingString": "4.3",
          "totalRatingsString": "345",
          "promoted": true,
          "adTrackingId": "cid=23756619~p=6~adgrpid=23756619#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=979759~eid=f91ceae5-a027-40df-adbe-82ffa215ff61~srvts=1737394101362~collid=83639",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-01-21 04:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "ABOVE ₹3000",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "23756619"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=979759&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }
]

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        Search
      </div>
      <div className='res-container'>
       {
        resList.map((restaturant) => (<RestaurantCard key={restaturant.card.card.info.id} resData={restaturant}/> ))
       }

      </div>
    </div>
  )
}


const AppLayout = () => {
  return (
    <div className='app'>
        <Header />
        <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.

// root.render(heading);
root.render(<AppLayout />);

// In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
