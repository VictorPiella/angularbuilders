import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const source = value as string;
    if(!source) return '';

    const defaultLimit = 20;
    const limitArg = args[0] as string;
    const limit = limitArg ? parseInt(limitArg): defaultLimit;

    if (source.length <= limit) return source;

    const defaultTrail = '...';
    const trailArgs = args[1];
    const trail = trailArgs || defaultTrail;

    const truncate = source.substring(0,limit) + trail;

    return truncate;
  }

}
