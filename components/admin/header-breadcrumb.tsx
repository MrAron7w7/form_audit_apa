import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

type HeaderBreadcrumbProps = {
  title: string;
  href: string;
  subtitles?: subTitles[];
};

type subTitles = {
  title: string;
  href: string;
};

function HeaderBreadcrumb({ title, href, subtitles }: HeaderBreadcrumbProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
            </BreadcrumbItem>

            {subtitles && subtitles.length > 0 && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}

            {subtitles?.map((subtitle) => (
              <BreadcrumbItem key={subtitle.title}>
                <BreadcrumbPage>{subtitle.title}</BreadcrumbPage>
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}

export default HeaderBreadcrumb;
