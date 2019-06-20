<ol class="breadcrumb">
    @if (count($breadcrumbs))
        @foreach ($breadcrumbs as $breadcrumb)
            @if ($breadcrumb->url && !$loop->last)
                @if ($breadcrumb->url && $loop->first)
                    <li class="breadcrumb-item"><a href="{{ $breadcrumb->url }}"> <i class="icon-home"></i> {{ $breadcrumb->title }}</a></li>
                @else
                    <li class="breadcrumb-item"><a href="{{ $breadcrumb->url }}">{{ $breadcrumb->title }}</a></li>
                @endif
            @else
                <li class="breadcrumb-item active">{{ $breadcrumb->title }}</li>
            @endif
        @endforeach
    @endif
</ol>
