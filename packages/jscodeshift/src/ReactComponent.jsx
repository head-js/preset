import { Divider, Breadcrumb } from 'antd';


const { Item: BreadcrumbItem } = Breadcrumb;


export default function ReactComponent() {
  return (
    <Divider>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>List</BreadcrumbItem>
        <BreadcrumbItem>App</BreadcrumbItem>
      </Breadcrumb>
    </Divider>
  );
}
