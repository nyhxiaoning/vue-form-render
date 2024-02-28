import { createRouter, createWebHashHistory } from 'vue-router'

import All from '../demos/all';
import Array from '../demos/array'
import Demo from '../docs/demo';
import DemoIndex from '../demos/demoIndex';
import DocsArray from '../docs/array';
import DocsBoolean from '../docs/boolean';
import DocsIndex from '../docs/docsIndex';
import DocsList from '../docs/list';
import DocsNumber from '../docs/number';
import DocsObject from '../docs/object';
import DocsString from '../docs/string';
import JsonEditor from '../demos/jsoneditor'
import Links from '../demos/links'
import Multi from '../demos/multi';
import Object from '../demos/object';
import RichText from '../demos/richText'
import Simple from '../demos/simple';
import String from '../demos/string';

const routes = [
  {
    path: '/',
    name: 'demos',
    component: DemoIndex,
    children: [
      {
        path: '',
        name: 'simple',
        component: Simple
      },
      {
        path: '/json1',
        name: 'json1',
        component: JsonEditor
      },
      {
        path: '/all',
        name: 'all',
        component: All
      },
      {
        path: '/links',
        name: 'links',
        component: Links
      },
      {
        path: '/object',
        name: 'object',
        component: Object
      },
      {
        path: '/string',
        name: 'string',
        component: String
      },
      {
        path: '/multi',
        name: 'multi',
        component: Multi
      },
      {
        path: '/array',
        name: 'array',
        component: Array
      },
      {
        path: '/richText',
        name: 'richText',
        component: RichText
      },
      {
        path: '/object',
        name: 'object',
        component: DocsObject
      },

      {
        path: '/:pathMatch(.*)*',
        component: Simple
      },
    ]
  },
  {
    name: 'docs',
    path: '/docs',
    component: DocsIndex,
    children: [
      {
        path: 'demo',
        component: Demo
      },
      {
        path: 'string',
        component: DocsString
      },
      {
        path: 'number',
        component: DocsNumber
      },
      {
        path: 'boolean',
        component: DocsBoolean
      },
      {
        path: 'array',
        component: DocsArray
      },
      {
        path: 'list',
        component: DocsList
      },
      {
        path: 'object',
        component: DocsObject
      }
    ]
  }
]

const router = createRouter({
  routes, // short for `routes: routes`
  history: createWebHashHistory(),
});

export default router;
