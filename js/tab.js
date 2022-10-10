document.addEventListener( "DOMContentLoaded" , function() {
    var tabs = document.querySelectorAll( '.tabbed li' );
    var tabsContent = document.querySelectorAll( '.tab-content .tab-content-child' );

    
    for (var i = 0, len = tabs.length; i < len; i++) {

      tabs[i].addEventListener("click", function() {
        if (this.classList.contains('active'))
          return;
  
        var parent = this.parentNode;
        var innerTabs = parent.querySelectorAll('li');
  
        for (var index = 0, iLen = innerTabs.length; index < iLen; index++) {
          innerTabs[index].classList.remove('active');
        }
  
        this.classList.add('active');

        // Hiện nội dung tab content

        // Lấy ID Tab content muốn hiển thị
        var tabContent = document.getElementById( this.getAttribute('model-tab') );

        // Xóa tất cả class active trong danh sach tab content
        for (var index = 0, iLen = tabsContent.length; index < iLen; index++) {
          tabsContent[index].classList.remove('active');
        }

        tabContent.classList.add('active');

      });
    }
    
  });