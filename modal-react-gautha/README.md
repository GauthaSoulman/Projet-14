# Modal 

This plugin is for the project 14 from OpenClassrooms formation "Front-End".


## How to install ?
```cmd
npm i modal-react-gautha
```


## How to use ?
1. Import the plugin in your project like this : 
```javascript
import Modal from "modal-react-gautha";
```

2. The state :
```javascript
const [displayModal, setDisplayModal] = useState(false);
```

3. In the return : 
```javascript
<Modal key={modalReset} id="You-modal-id" showModal={displayModal} closeModal={() => setDisplayModal(false)} parameter={modalParameter} message="Your message" />
```


## Customize you modal
1. Put this into your component :
```javascript
const modalParameter = {
	"backgroundColor": "",   
	"borderRadius": "",
	"boxShadow": "",
	"color": "",
	"fontSize": "",
	"height": "",
	"padding": "",
	"width": ""
}
```