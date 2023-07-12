import { Breadcrumb } from 'antd';


const { Item: BreadcrumbItem } = Breadcrumb;


export default function Container() {
  return <>
    <Breadcrumb>
      <BreadcrumbItem>Remote</BreadcrumbItem>
      <BreadcrumbItem>App</BreadcrumbItem>
      <BreadcrumbItem>Bread</BreadcrumbItem>
    </Breadcrumb>
  </>;
}
