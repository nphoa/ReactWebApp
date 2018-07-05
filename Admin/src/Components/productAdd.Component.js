import React, { Component } from "react";


class ProductAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        idCategoryChange:1
    };
  }
  componentDidMount(){
    this.props.getAllCategory();
    this.props.getAllAuthor();
    this.props.getAllPublisher();
    this.props.getAllReleaseCompany();
  }
  showListCategory = (categories) => {
    let result = null;
    result  = categories.map((item,index)=>{
        return (
            <option value={item.category_id} key={index}>{item.category_name}</option>
        )
    });
    return result;
  }
  showListCategoryChild = (idParent,categories) => {
    let result = null;
    let cate = categories.find(item => item.category_id == idParent);
    if(cate != undefined) {
        result  = cate.listChild.map((item,index)=>{
            return (
                <option value={item.category_id} key={index}>{item.category_name}</option>
            )
        });
    }
    return result;
  }
  onChangeCategory = (event) => {
    console.log(event.target.value);
    this.state.idCategoryChange = event.target.value;
    this.setState({
        idCategoryChange:this.state.idCategoryChange
    })
  }
  showListAuthor = (authors) => {
    let result = null;
    if(authors != undefined) {
      result  = authors.map((item,index)=>{
        return (
            <option value={item.id} key={index}>{item.name}</option>
        )
      });
    }
    return result;
  }
  showListPublisher = (publishers) => {
    let result = null;
    if(publishers!=null){
      result  = publishers.map((item,index)=>{
        return (
            <option value={item.id} key={index}>{item.name}</option>
        )
      });
    }
    return result;
  }
  showListReleaseCompany = (releaseCompanys) => {
    let result = null;
     if(releaseCompanys!=null){
      result  = releaseCompanys.map((item,index)=>{
        return (
            <option value={item.id} key={index}>{item.name}</option>
        )
      });
     }
    return result;
  }
  render() {
    return (
        <div className="panel panel-widget forms-panel">
        <div className="progressbar-heading general-heading">
          <h4>Add new book:</h4>
        </div>
        <div className="forms">
          <div className="form-three widget-shadow">
            <form className="form-horizontal">
              <div className="form-group">
                <label htmlFor="focusedinput" className="col-sm-2 control-label">Product code</label>
                <div className="col-sm-8">
                  <input type="text" className="form-control1" id="focusedinput"  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="disabledinput" className="col-sm-2 control-label">Product name</label>
                <div className="col-sm-8">
                  <input  type="text" className="form-control1" id="focusedinput"  />
                </div>
              </div>
          
              <div className="form-group"> 
                <label className="col-sm-2 control-label" for="exampleInputFile">Product image</label> 
                <div className="col-sm-8">
                    <input type="file" id="exampleInputFile" /> 
                    <p className="help-block">Upload hình ảnh sản phẩm</p>
                </div>
                
              </div>
           
            
              <div className="form-group">
                <label htmlFor="selector1" className="col-sm-2 control-label">Chọn loại sách</label>
                <div className="col-sm-4">
                    <select onChange={this.onChangeCategory} name="selector1" id="selector1" className="form-control1" placeholder="Chọn thể loại">
                    {this.showListCategory(this.props.categories)}
                  </select>
                </div>
                <div className="col-sm-4"><select name="selector1" id="selector1" className="form-control1" placeholder="Chọn danh mục theo loại">
                    {this.showListCategoryChild(this.state.idCategoryChange,this.props.categories)}
                </select></div>
              </div>
       
              <div className="form-group">
              <label htmlFor="disabledinput" className="col-sm-2 control-label">Product price</label>
              <div className="col-sm-8">
                <input  type="number" className="form-control1" id="focusedinput"  />
              </div>
            </div>
              
            <div className="form-group">
            <label htmlFor="selector1" className="col-sm-2 control-label">Company release</label>
            <div className="col-sm-8"><select name="selector1" id="selector1" className="form-control1">
               {this.showListReleaseCompany(this.props.releaseCompanys)}
              </select></div>
            </div>

            <div className="form-group">
            <label htmlFor="selector1" className="col-sm-2 control-label">Publisher</label>
            <div className="col-sm-8"><select name="selector1" id="selector1" className="form-control1">
                {this.showListPublisher(this.props.publishers)}
              </select></div>
            </div>

            <div className="form-group">
            <label htmlFor="selector1" className="col-sm-2 control-label">Author</label>
            <div className="col-sm-8"><select name="selector1" id="selector1" className="form-control1">
                {this.showListAuthor(this.props.authors)}
              </select></div>
            </div>

            <div className="form-group">
                <label htmlFor="disabledinput" className="col-sm-2 control-label">Size</label>
                <div className="col-sm-8">
                <input  type="text" className="form-control1" id="focusedinput"  />
                </div>
            </div>

            
            <div className="form-group">
            <label htmlFor="disabledinput" className="col-sm-2 control-label">Page number</label>
            <div className="col-sm-8">
              <input  type="number" className="form-control1" id="focusedinput"  />
            </div>
          </div>

          <div className="form-group">
          <label htmlFor="disabledinput" className="col-sm-2 control-label">Release Date </label>
          <div className="col-sm-8">
            <input  type="date" className="form-control1" id="focusedinput"  />
          </div>
        </div>

        <div className="form-group">
            <label htmlFor="disabledinput" className="col-sm-2 control-label">Cover type</label>
            <div className="col-sm-8">
            <input  type="text" className="form-control1" id="focusedinput"  />
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="txtarea1" className="col-sm-2 control-label">Mô tả ngắn</label>
            <div className="col-sm-8"><textarea name="txtarea1" id="txtarea1" cols={50} rows={4} className="form-control1"  /></div>
        </div>
        
        <div className="form-group">
            <label htmlFor="txtarea1" className="col-sm-2 control-label">Mô tả chi tiết</label>
            <div className="col-sm-8"><textarea name="txtarea1" id="txtarea1" cols={50} rows={4} className="form-control1"  /></div>
        </div>
            
             
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductAddComponent;
