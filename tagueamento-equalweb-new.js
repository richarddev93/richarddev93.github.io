function prefixBaseUrl() {
  let url = window.location.href || document.URL || ''
  let verifyBaseUrl = (key) => url.includes(key);
  
  switch (true) {
    case verifyBaseUrl('loja.suvinil.com.br') ||verifyBaseUrl('loja.hml.suvinil.com.br'): return 'loja-online';         break;    
    case verifyBaseUrl('suvinil.com.br/encontre-seu-pintor'):                             return 'encontre-seu-pintor'; break;
    default: return 'institucional';
  }
}

(function (window,document){
            
  window.addEventListener('load', checkJSLoaded)
  var countAddedEvents= 0;
    const normalize = (string) => {
      return string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .split(" ")
      .join("-");
    };

    const accessibility = {                  
      menuClickEvent: () => {
        return {
          event: "interaction",
          event_category: `${prefixBaseUrl()}:acessibilidade`,
          event_action: "clique",
          event_label: "explore-sua-opcoes",
        }},
        
      menuExpand: (type) => {
      return {
          event: "interaction",
          event_category: `${prefixBaseUrl()}:acessibilidade`,
          event_action: "expandir",
          event_label: normalize(type),
      }},
      
      menuRetract: (type) => {
          return {
          event: "interaction",
          event_category: `${prefixBaseUrl()}:acessibilidade`,
          event_action: "retrair",
          event_label: normalize(type),
          }},
            
      headerItemsClickEvent: (item) => {
        return {
          event: "interaction",
          event_category: `${prefixBaseUrl()}:acessibilidade`,
          event_action: "clique",
          event_label: normalize(item),
        }},
        
      footerItemsCtaClick: (item) => {
      return {
          event: "interaction",
          event_category: `${prefixBaseUrl()}:acessibilidade`,
          event_action: "clique",
          event_label: normalize(item),
      }},
          
      languageSelection: (language) => {
          return {
          event: "interaction",
          event_category: `${prefixBaseUrl()}:acessibilidade`,
          event_action: "clique",
          event_label:  normalize(language),
          }},
            
      itemMenuAccessibilityClickEvent: (item, menu) => {
      return {
          event: "interaction",
          event_category: `${prefixBaseUrl()}:acessibilidade`,
          event_action: "clique:"+ normalize(item),
          event_label: normalize(menu),
        }},
    
      colorsSlide: (item, name) => {
        return {
          event: "interaction",
          event_category: `${prefixBaseUrl()}:acessibilidade`,
          event_action: "clique:ajustar-cor-" + normalize(item),
          event_label: normalize(name),
        }},
    
      fontSlide: (item, name) => {
        return {
          event: "interaction",
          event_category: `${prefixBaseUrl()}:acessibilidade`,
          event_action: "clique:ajustar-fonte-" + normalize(item),
          event_label: normalize(name),
        }},
      
    };

    var switchEvents = (cta) => {

      var type = cta.getAttribute('data-indopt');
      var expanded = 'true' === cta.getAttribute('aria-expanded');
      var result = null;
      
      if ( !type ) {
        type = cta.getAttribute('id')
      } 

      switch (type) {
        
        case 'IND_acc0_btn0':                      
          if (expanded){
            result = accessibility.menuRetract('Ajuste de voz e navegação');
          }else {
            result = accessibility.menuExpand('Ajuste de voz e navegação');
          }
          break;
          
          case 'IND_acc0_btn1':                        
          if (expanded){
            result = accessibility.menuRetract('Ajuste de Cor');
          }else {
            result = accessibility.menuExpand('Ajuste de Cor');
          }
          break;

        case 'IND_acc0_btn2':
          if (expanded){
            result = accessibility.menuRetract('Ajuste de Conteúdo');
          }else {
            result = accessibility.menuExpand('Ajuste de Conteúdo');
          }  
          break;

        case 'a11yMode':
          result = accessibility.headerItemsClickEvent('Accessibility Mode');
          break;
          
        case 'expandMenu':
          result = accessibility.headerItemsClickEvent('Expandir Menu Acessibilidade');
          break;
  
        case 'hideButton':
          result = accessibility.headerItemsClickEvent('Tempo para Ocultar');
          break;     
  
        case 'INDcloseAccMenu':
          result = accessibility.headerItemsClickEvent('Fechar');
          break;
      
        case 'feedback':
          result = accessibility.footerItemsCtaClick('Enviar Feedback');
          break;
      
        case 'statement':
          result = accessibility.footerItemsCtaClick('Demonstrativo de Acessibilidade');
          break;
      
        case 'switchoff':
          result = accessibility.footerItemsCtaClick('Desligar');
          break;

        case 'soundreder':
          result = accessibility.itemMenuAccessibilityClickEvent('Ajuste de Leitor de Tela','Ajuste de voz e navegação');
          break;

        case 'keyboard':
          result = accessibility.itemMenuAccessibilityClickEvent('Navegação de Teclado','Ajuste de voz e navegação');
          break;
      
        case 'smartnav':
          result = accessibility.itemMenuAccessibilityClickEvent('Navegação Inteligente','Ajuste de voz e navegação');
          break;
      
        case 'epilepsy':
          result = accessibility.itemMenuAccessibilityClickEvent('Bloqueio de Intermitência de Brilho','Ajuste de voz e navegação');
          break;
      
        case 'textreader':
          result = accessibility.itemMenuAccessibilityClickEvent('Leitor de texto','Ajuste de voz e navegação');
          break;
      
        case 'monochrome':
          result = accessibility.itemMenuAccessibilityClickEvent('Monocromático','Ajuste de Cor');
          break;

        case 'blackwhite':
          result = accessibility.itemMenuAccessibilityClickEvent('Alto Contraste Escuro','Ajuste de Cor');
          break;

        case 'whiteblack':
          result = accessibility.itemMenuAccessibilityClickEvent('Alto Contraste Claro','Ajuste de Cor');
          break;

        case 'INDcolorReset':
          result = accessibility.itemMenuAccessibilityClickEvent('Redefinir as Cores','Ajuste de Cor');
          break;

        case 'fontsizedec':
          result = accessibility.itemMenuAccessibilityClickEvent('Diminuir tamanho da Fonte','Ajuste de Conteúdo');
          break;

        case 'fontsizeinc':
          result = accessibility.itemMenuAccessibilityClickEvent('Aumentar tamanho da Fonte','Ajuste de Conteúdo');
          break;

        case 'linesizedec':
          result = accessibility.itemMenuAccessibilityClickEvent('Diminuir Espaçamento entre Linhas','Ajuste de Conteúdo');
          break;

        case 'linesizeinc':
          result = accessibility.itemMenuAccessibilityClickEvent('Aumentar Espaçamento entre Linhas','Ajuste de Conteúdo');
          break;
          
        case 'wordsizedec':
          result = accessibility.itemMenuAccessibilityClickEvent('Diminuir Espaçamento entre Palavras','Ajuste de Conteúdo');
          break;

        case 'wordsizeinc':
          result = accessibility.itemMenuAccessibilityClickEvent('Aumentar Espaçamentos entre Palavras','Ajuste de Conteúdo');
          break;

        case 'blackcursor':
          result = accessibility.itemMenuAccessibilityClickEvent('Cursor Preto','Ajuste de Conteúdo');
          break;

        case 'whitecursor':
          result = accessibility.itemMenuAccessibilityClickEvent('Cursor Branco','Ajuste de Conteúdo');
          break;

        case 'magnifier':
          result = accessibility.itemMenuAccessibilityClickEvent('Lupa','Ajuste de Conteúdo');
          break;
          
        case 'readablefont':
          result = accessibility.itemMenuAccessibilityClickEvent('Fonte Legível','Ajuste de Conteúdo');
          break;

        case 'alttext':
          result = accessibility.itemMenuAccessibilityClickEvent('Descrições de Imagem','Ajuste de Conteúdo');
          break;

        case 'links':
          result = accessibility.itemMenuAccessibilityClickEvent('Destacar Links','Ajuste de Conteúdo');
          break;

        case 'headers':
          result = accessibility.itemMenuAccessibilityClickEvent('Destacar Cabeçalhos','Ajuste de Conteúdo');
          break;

        case 'readabilitymode':
          result = accessibility.itemMenuAccessibilityClickEvent('Modo de Leitura','Ajuste de Conteúdo');
          break;

        case 'textmagnifier':
          result = accessibility.itemMenuAccessibilityClickEvent('Ampliador de Texto','Ajuste de Conteúdo');
          break;

        case 'virtualKeyboard':
          result = accessibility.itemMenuAccessibilityClickEvent('Teclado Virtual','Ajuste de Conteúdo');
          break;
      
        default:
            result = null;
          break;
      }
    
      //console.log(result)
      if (result)
         dataLayer.push(result);
    } 

    var dispatcherEventInput = (cta,i) => {

      var wrapRadioGroup = document.getElementById('INDcustomcolor-radioGroup');  
      var inputs = wrapRadioGroup.getElementsByTagName('input');
      var labels = wrapRadioGroup.getElementsByTagName('label');    
      
      for(var i=0,n=inputs.length;i<n;i++){
        if ( inputs[i].checked  && ( inputs[i].getAttribute('id') === 'INDchangeColor-background' || inputs[i].getAttribute('id') === 'INDchangeColor-titles' || inputs[i].getAttribute('id') ===  'INDchangeColor-text' )) {
            dataLayer.push( accessibility.colorsSlide(labels[i].innerHTML,'Ajuste de Cor') );
        }                        
      }                         
    }

    var handleAnchors = (anchors)=> {
      for(var i=0,n=anchors.length;i<n;i++){
          if(anchors[i].getAttribute('href') === 'https://www.equalweb.com.br/'){
            anchors[i].addEventListener('click', () => dataLayer.push(accessibility.footerItemsCtaClick('EqualWeb Brasil') ));
          }
      }
    }

    var handleButtons = (buttons)=> {
      for(var i=0,n=buttons.length;i<n;i++){
        if(buttons[i]){
          buttons[i].addEventListener('click',function(iBindededValue){
            switchEvents(buttons[iBindededValue]);
          }.bind(this,i))
        }
      }
    }
    var handleInputs = (inputs)=> {                
      for(var i=0,n=inputs.length;i<n;i++){
        if (inputs[i].getAttribute('id') === "INDmenu-colorInput"){
          inputs[i].addEventListener('click', () => dispatcherEventInput());
        }
      }
    }

    var handleSelect = () => {
      var select= document.getElementById('INDlangsCombo');
      var value = select.options[select.selectedIndex].text;
      dataLayer.push(accessibility.languageSelection(value.replace(/[{()}]/g, '')));
      countAddedEvents = 0;
      addEvents();                
    }

    var addEvents = function(){

      if (countAddedEvents == 0){
        var wrapperEqualWeb=document.getElementById('INDmenu');  
        var buttons = wrapperEqualWeb.getElementsByTagName('button');
        var anchors = wrapperEqualWeb.getElementsByTagName('a');
        var wrapRadioGroup = document.getElementById('INDmenuGroup-customcolor');  
        var selectLanguage = document.getElementById('INDlangsCombo');

        if (selectLanguage) {                    
          selectLanguage.addEventListener('change', ()=> setTimeout(handleSelect,2000));
        }
        
        if (wrapRadioGroup) {
          var inputs = wrapRadioGroup.getElementsByTagName('input');
          handleInputs(inputs);
        }

        handleAnchors(anchors);

        handleButtons(buttons);

        countAddedEvents++;

      }

    }
  
  function checkJSLoaded (){        
    var btnAccessibility=document.getElementById('INDmenu-btn');
    btnAccessibility.addEventListener('click', () => {
      dataLayer.push(accessibility.menuClickEvent());
      setTimeout(addEvents,3000)
    });
  }

})(window,document);
