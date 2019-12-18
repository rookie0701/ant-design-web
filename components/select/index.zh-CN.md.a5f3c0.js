(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1609:function(t,d){t.exports={content:["section",["p","下拉选择器。"],["h2","何时使用"],["ul",["li",["p","弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。"]],["li",["p","当选项少时（少于 5 项），建议直接将选项平铺，使用 ",["a",{title:null,href:"/components/radio/"},"Radio"]," 是更好的选择。"]]]],meta:{category:"Components",subtitle:"选择器",type:"数据录入",title:"Select",filename:"components/select/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select.Option</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select</span><span class="token punctuation">></span></span>'},["code",'<Select>\n  <Select.Option value="lucy">lucy</Select.Option>\n</Select>']],["h3","Select props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","allowClear"],["td","支持清除"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoClearSearchValue"],["td","是否在选中项后清空搜索框，只在 ",["code","mode"]," 为 ",["code","multiple"]," 或 ",["code","tags"]," 时有效。"],["td","boolean"],["td","true"],["td","3.10.0"]],["tr",["td","autoFocus"],["td","默认获取焦点"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","是否默认高亮第一个选项。"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultValue"],["td","指定默认选中的条目"],["td","string","|","string","[","]\\",["br"],"number","|","number","[","]\\",["br"],"LabeledValue","|","LabeledValue[]"],["td","-"],["td"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","dropdownClassName"],["td","下拉菜单的 className 属性"],["td","string"],["td","-"],["td"]],["tr",["td","dropdownMatchSelectWidth"],["td","下拉菜单和选择器同宽"],["td","boolean"],["td","true"],["td"]],["tr",["td","dropdownRender"],["td","自定义下拉框内容"],["td","(menuNode: ReactNode, props) => ReactNode"],["td","-"],["td","3.11.0"]],["tr",["td","dropdownStyle"],["td","下拉菜单的 style 属性"],["td","object"],["td","-"],["td"]],["tr",["td","dropdownMenuStyle"],["td","dropdown 菜单自定义样式"],["td","object"],["td","-"],["td"]],["tr",["td","filterOption"],["td","是否根据输入项进行筛选。当其为一个函数时，会接收 ",["code","inputValue"]," ",["code","option"]," 两个参数，当 ",["code","option"]," 符合筛选条件时，应返回 ",["code","true"],"，反之则返回 ",["code","false"],"。"],["td","boolean or function(inputValue, option)"],["td","true"],["td"]],["tr",["td","firstActiveValue"],["td","默认高亮的选项"],["td","string","|","string","[","]"],["td","-"],["td"]],["tr",["td","getPopupContainer"],["td","菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",["a",{title:null,href:"https://codesandbox.io/s/4j168r7jw0"},"示例"]],["td","Function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","labelInValue"],["td","是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 ",["code","string"]," 变为 ",["code","{key: string, label: ReactNode}"]," 的格式"],["td","boolean"],["td","false"],["td"]],["tr",["td","maxTagCount"],["td","最多显示多少个 tag"],["td","number"],["td","-"],["td"]],["tr",["td","maxTagTextLength"],["td","最大显示的 tag 文本长度"],["td","number"],["td","-"],["td","3.18.0"]],["tr",["td","maxTagPlaceholder"],["td","隐藏 tag 时显示的内容"],["td","ReactNode/function(omittedValues)"],["td","-"],["td"]],["tr",["td","mode"],["td","设置 Select 的模式为多选或标签"],["td","'multiple' ","|"," 'tags'"],["td","-"],["td"]],["tr",["td","notFoundContent"],["td","当下拉列表为空时显示的内容"],["td","string"],["td","'Not Found'"],["td"]],["tr",["td","optionFilterProp"],["td","搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索。",["a",{title:null,href:"https://codesandbox.io/s/antd-reproduction-template-tk678"},"示例"]],["td","string"],["td","value"],["td"]],["tr",["td","optionLabelProp"],["td","回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 ",["code","value"],"。"],["td","string"],["td",["code","children"]," （combobox 模式下为 ",["code","value"],"）"],["td"]],["tr",["td","placeholder"],["td","选择框默认文字"],["td","string"],["td","-"],["td"]],["tr",["td","showArrow"],["td","是否显示下拉小箭头"],["td","boolean"],["td","true"],["td","3.2.1"]],["tr",["td","showSearch"],["td","使单选模式可搜索"],["td","boolean"],["td","false"],["td"]],["tr",["td","size"],["td","选择框大小，可选 ",["code","large"]," ",["code","small"]],["td","string"],["td","default"],["td"]],["tr",["td","suffixIcon"],["td","自定义的选择框后缀图标"],["td","ReactNode"],["td","-"],["td","3.10.0"]],["tr",["td","removeIcon"],["td","自定义的多选框清除图标"],["td","ReactNode"],["td","-"],["td","3.11.0"]],["tr",["td","clearIcon"],["td","自定义的多选框清空图标"],["td","ReactNode"],["td","-"],["td","3.11.0"]],["tr",["td","menuItemSelectedIcon"],["td","自定义多选时当前选中的条目图标"],["td","ReactNode"],["td","-"],["td","3.11.0"]],["tr",["td","tokenSeparators"],["td","在 tags 和 multiple 模式下自动分词的分隔符"],["td","string","[","]"],["td"],["td"]],["tr",["td","value"],["td","指定当前选中的条目"],["td","string","|","string","[","]\\",["br"],"number","|","number","[","]\\",["br"],"LabeledValue","|","LabeledValue[]"],["td","-"],["td"]],["tr",["td","onBlur"],["td","失去焦点时回调"],["td","function"],["td","-"],["td"]],["tr",["td","onChange"],["td","选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数"],["td","function(value, option:Option/Array","<","Option>)"],["td","-"],["td"]],["tr",["td","onDeselect"],["td","取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效"],["td","function(string","|","number","|","LabeledValue)"],["td","-"],["td"]],["tr",["td","onFocus"],["td","获得焦点时回调"],["td","function"],["td","-"],["td"]],["tr",["td","onInputKeyDown"],["td","按键按下时回调"],["td","function"],["td","-"],["td","3.1.0"]],["tr",["td","onMouseEnter"],["td","鼠标移入时回调"],["td","function"],["td","-"],["td"]],["tr",["td","onMouseLeave"],["td","鼠标移出时回调"],["td","function"],["td","-"],["td"]],["tr",["td","onPopupScroll"],["td","下拉列表滚动时的回调"],["td","function"],["td","-"],["td"]],["tr",["td","onSearch"],["td","文本框值变化时回调"],["td","function(value: string)"],["td"],["td"]],["tr",["td","onSelect"],["td","被选中时调用，参数为选中项的 value (或 key) 值"],["td","function(string","|","number","|","LabeledValue, option:Option)"],["td","-"],["td"]],["tr",["td","defaultOpen"],["td","是否默认展开下拉菜单"],["td","boolean"],["td","-"],["td","3.9.3"]],["tr",["td","open"],["td","是否展开下拉菜单"],["td","boolean"],["td","-"],["td","3.9.0"]],["tr",["td","onDropdownVisibleChange"],["td","展开下拉菜单的回调 (3.9.0 后支持)"],["td","function(open)"],["td","-"],["td","3.9.0"]],["tr",["td","loading"],["td","加载中状态"],["td","Boolean"],["td","false"],["td","3.11.0"]]]],["blockquote",["p","注意，如果发现下拉菜单跟随页面滚动，或者需要在其他弹层中触发 Select，请尝试使用 ",["code","getPopupContainer={triggerNode => triggerNode.parentElement}"]," 将下拉弹层渲染节点固定在触发器的父元素中。"]],["h3","Select Methods"],["table",["thead",["tr",["th","名称"],["th","说明"],["th","版本"]]],["tbody",["tr",["td","blur()"],["td","取消焦点"],["td"]],["tr",["td","focus()"],["td","获取焦点"],["td"]]]],["h3","Option props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","key"],["td","和 value 含义一致。如果 React 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置"],["td","string"],["td"],["td"]],["tr",["td","title"],["td","选中该 Option 后，Select 的 title"],["td","string"],["td","-"],["td"]],["tr",["td","value"],["td","默认根据此属性值进行筛选"],["td","string","|","number"],["td","-"],["td"]],["tr",["td","className"],["td","Option 器类名"],["td","string"],["td","-"],["td","3.10.1"]]]],["h3","OptGroup props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","key"],["td"],["td","string"],["td","-"],["td"]],["tr",["td","label"],["td","组名"],["td","string","|","React.Element"],["td","无"],["td"]]]],["h2","FAQ"],["h3","点击 ",["code","dropdownRender"]," 里的内容浮层关闭怎么办？"],["p","看下 ",["a",{title:null,href:"/components/select-cn/#components-select-demo-custom-dropdown-menu"},"dropdownRender 例子"]," 里的说明。"]]}}}]);